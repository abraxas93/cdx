using Microsoft.Owin.Hosting;
using System.Net.Http;
using System.Windows.Forms;

namespace ColorDx.Main.Host
{
    class Program
    {
        [System.STAThread]
        static void Main()
        {
            string baseAddress = "http://localhost:8000/";

            using (WebApp.Start<Startup>(url: baseAddress))
            {
                Application.EnableVisualStyles();
                Application.Run(new Form());
            }
        }
    }
}