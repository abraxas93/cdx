using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;
using System.Windows.Threading;
using WaggonerDx.Native.Dialogs;

namespace WaggonerDx.Main.Host
{
    class Program
    {
        [System.STAThread]
        static void Main()
        {
            var loading = new LoadingDialog();
            loading.Show();

            Directory.SetCurrentDirectory(Path.GetDirectoryName(
                System.Reflection.Assembly.GetExecutingAssembly().Location ?? string.Empty) ?? string.Empty);

            var start = new ProcessStartInfo
            {
                FileName = "waggonerdx.exe",
                UseShellExecute = true
            };
            var process = Process.Start(start);

            var mainForm = new Form
            {
                Visible = false,
                FormBorderStyle = FormBorderStyle.None,
                Width = 0,
                Height = 0,
                WindowState = FormWindowState.Minimized,
                ShowInTaskbar = false
            };
            mainForm.Load += (o, e) =>
            {
                var loops = 0;
                Action dispatcherAction = () => { };
                dispatcherAction = () =>
                {
                    mainForm.Invoke((MethodInvoker) delegate
                    {
                        if (!process.HasExited && loops < 30)
                        {
                            System.Threading.Thread.Sleep(100);
                            loops++;
                            dispatcherAction();
                        }
                        else
                        {
                            if (process.HasExited)
                            {
                                Application.Exit();
                            }
                            else
                            {
                                if (loading != null)
                                {
                                    loading.Close();
                                    loading = null;
                                }
                                else
                                {
                                    System.Threading.Thread.Sleep(100);
                                }
                                dispatcherAction();
                            }
                            
                        }
                    }, DispatcherPriority.Background);
                };
                dispatcherAction();
            };

            Application.Run(mainForm);
        }
    }
}