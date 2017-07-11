using CefSharp;
using System.Windows.Forms;

namespace WaggonerDx.Native.Flows
{
    public class MainFlow
    {
        Form _mainForm;

        public MainFlow(Form mainForm)
        {
            _mainForm = mainForm;
        }

        public void Exit()
        {
            System.Threading.Tasks.Task.Run(() =>
            {
                System.Threading.Thread.Sleep(100);
                _mainForm.Invoke((MethodInvoker)delegate
                {
                    _mainForm.Close();
                });
            });
        }
    }
}
