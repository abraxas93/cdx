using System;
using WaggonerDx.Native.Flows;

namespace WaggonerDx.Native.JsBridge
{
    public enum ConsoleLogLevel
    {
        Info = 1,
        Warning = 5,
        Error = 10
    }

    public class JsBridge
    {
        private MainFlow _mainFlow;

        public JsBridge(MainFlow mainFlow)
        {
            _mainFlow = mainFlow;
        }

        public void Init()
        {
        }

        public void Log(string message, ConsoleLogLevel logLevel)
        {
        }

        public void BtmMenuClick(string clickedId)
        {
            _mainFlow.Exit();
        }
    }
}
