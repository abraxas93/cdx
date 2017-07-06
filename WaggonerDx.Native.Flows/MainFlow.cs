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
            _mainForm.Invoke((MethodInvoker) delegate { _mainForm.Close(); });
        }
    }
}
