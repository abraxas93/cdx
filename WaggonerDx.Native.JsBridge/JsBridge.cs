using System;
using Newtonsoft.Json;
using WaggonerDx.Native.Flows;
using System.Collections.Generic;

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

        public string RegistrationSubmitted(string payload)
        {
            var deserialized = JsonConvert.DeserializeObject<Dictionary<string,string>>(payload);
            if (!deserialized.ContainsKey("firstName") || string.IsNullOrWhiteSpace(deserialized["firstName"]))
            {
                throw new Exception("Please enter first name\nMultiline example");
            }

            return "second.html";
        }

        public string GetRegistrationError()
        {
            return "{\"message\":\"Please enter first name\\nMultiline example\",\"fields\":[\"firstName\"]}";
        }
    }
}
