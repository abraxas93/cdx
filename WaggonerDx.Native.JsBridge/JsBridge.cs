using System;

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
        public void Init()
        {
        }

        public void Log(string message, ConsoleLogLevel logLevel)
        {
        }
    }
}
