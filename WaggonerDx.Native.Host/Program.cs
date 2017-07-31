using CefSharp;
using CefSharp.WinForms;
using Microsoft.Owin.Hosting;
using System;
using System.IO;
using System.Net.Http;
using System.Windows.Forms;
using WaggonerDx.Native.Dialogs;
using WaggonerDx.Native.Flows;
using WaggonerDx.Native.JsBridge;

namespace WaggonerDx.Main.Host
{
    public class BrowserProcessHandler : IBrowserProcessHandler
    {
        /// <summary>
        /// The maximum number of milliseconds we're willing to wait between calls to OnScheduleMessagePumpWork().
        /// </summary>
        protected const int MaxTimerDelay = 1000 / 30;  // 30fps

        void IBrowserProcessHandler.OnContextInitialized()
        {
            //The Request Context has been initialized, you can now set preferences, like proxy server settings
            var cookieManager = Cef.GetGlobalCookieManager();
            var appDataFolder = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "WaggonerDx");
            if (!Directory.Exists(appDataFolder))
            {
                try
                {
                    Directory.CreateDirectory(appDataFolder);
                }
                catch
                {
                }
            }
            cookieManager.SetStoragePath(Path.Combine(appDataFolder, "cookies"), true);

            //Dispose of context when finished - preferable not to keep a reference if possible.
            using (var context = Cef.GetGlobalRequestContext())
            {
                string errorMessage;
                //You can set most preferences using a `.` notation rather than having to create a complex set of dictionaries.
                //The default is true, you can change to false to disable
                context.SetPreference("webkit.webprefs.plugins_enabled", true, out errorMessage);
            }
        }

        void IBrowserProcessHandler.OnScheduleMessagePumpWork(long delay)
        {
            //If the delay is greater than the Maximum then use MaxTimerDelay
            //instead - we do this to achieve a minimum number of FPS
            if (delay > MaxTimerDelay)
            {
                delay = MaxTimerDelay;
            }
            OnScheduleMessagePumpWork((int) delay);
        }

        protected virtual void OnScheduleMessagePumpWork(int delay)
        {
            //TODO: Schedule work on the UI thread - call Cef.DoMessageLoopWork
        }

        public virtual void Dispose()
        {

        }
    }

    class Program
    {
        [System.STAThread]
        static void Main()
        {
            try
            {
                string baseAddress = "http://localhost:8000/";

                using (WebApp.Start<Startup>(url: baseAddress))
                {
                    Cef.EnableHighDPISupport();

                    var appDataFolder = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "WaggonerDx");
                    if (!Directory.Exists(appDataFolder))
                    {
                        try
                        {
                            Directory.CreateDirectory(appDataFolder);
                        }
                        catch
                        {
                        }
                    }

                    var settings = new CefSettings();
                    settings.RemoteDebuggingPort = 8088;
                    settings.CachePath = Path.Combine(appDataFolder, "cache");

                    var browserProcessHandler = new BrowserProcessHandler();
                    Cef.Initialize(settings, performDependencyCheck: false, browserProcessHandler: browserProcessHandler);

#if DEBUG
                    try
                    {
                        Directory.Delete(Path.Combine(appDataFolder, "cache"), true);
                    }
                    catch
                    {
                    }
#endif
                    var browser = new ChromiumWebBrowser("http://localhost:8000/static/index.html");

                    var mainForm = new Form();
                    mainForm.MinimumSize = new System.Drawing.Size(800, 600);
                    mainForm.WindowState = FormWindowState.Maximized;
#if !DEBUG
                    mainForm.FormBorderStyle = FormBorderStyle.None;
#endif
                    mainForm.Controls.Add(browser);

                    browser.RegisterAsyncJsObject("native", new JsBridge(new MainFlow(mainForm)));
                    browser.Dock = DockStyle.Fill;

                    Application.EnableVisualStyles();
                    Application.Run(mainForm);
                }
            }
            catch (Exception ex)
            {
                (new Error(ex.InnerException != null ? ex.InnerException.Message : ex.Message)).ShowDialog();
                try
                {
                    Cef.Shutdown();
                }
                catch
                {
                }
            }
        }
    }
}