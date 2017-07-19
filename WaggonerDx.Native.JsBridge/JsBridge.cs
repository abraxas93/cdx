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

        private class RegistrationErrors
        {
            public RegistrationErrors()
            {
                Errors = new List<string>();
                Fields = new List<string>();
            }

            [JsonProperty(PropertyName = "message")]
            public List<string> Errors;

            [JsonProperty(PropertyName = "fields")]
            public List<string> Fields;
        }

        private RegistrationErrors _registrationErrors = new RegistrationErrors();
        public string RegistrationSubmitted(string payload)
        {
            var deserialized = JsonConvert.DeserializeObject<Dictionary<string,string>>(payload);

            _registrationErrors = new RegistrationErrors();
            if (!deserialized.ContainsKey("firstName") || string.IsNullOrWhiteSpace(deserialized["firstName"]))
            {
                _registrationErrors.Errors.Add("First name is mandatory");
                _registrationErrors.Fields.Add("firstName");
            }

            if (!deserialized.ContainsKey("lastName") || string.IsNullOrWhiteSpace(deserialized["lastName"]))
            {
                _registrationErrors.Errors.Add("Last name is mandatory");
                _registrationErrors.Fields.Add("lastName");
            }

            if (!deserialized.ContainsKey("email") || string.IsNullOrWhiteSpace(deserialized["email"]))
            {
                _registrationErrors.Errors.Add("Email is mandatory");
                _registrationErrors.Fields.Add("email");
            }

            if (!deserialized.ContainsKey("phone") || string.IsNullOrWhiteSpace(deserialized["phone"]))
            {
                _registrationErrors.Errors.Add("Phone is mandatory");
                _registrationErrors.Fields.Add("phone");
            }

            if (!deserialized.ContainsKey("adress") || string.IsNullOrWhiteSpace(deserialized["adress"]))
            {
                _registrationErrors.Errors.Add("Adress is mandatory");
                _registrationErrors.Fields.Add("adress");
            }

            if (!deserialized.ContainsKey("city") || string.IsNullOrWhiteSpace(deserialized["city"]))
            {
                _registrationErrors.Errors.Add("City is mandatory");
                _registrationErrors.Fields.Add("city");
            }

            if (!deserialized.ContainsKey("state") || string.IsNullOrWhiteSpace(deserialized["state"]))
            {
                _registrationErrors.Errors.Add("State is mandatory");
                _registrationErrors.Fields.Add("state");
            }

            if (!deserialized.ContainsKey("country") || string.IsNullOrWhiteSpace(deserialized["country"]))
            {
                _registrationErrors.Errors.Add("Country is mandatory");
                _registrationErrors.Fields.Add("country");
            }

            if (!deserialized.ContainsKey("zipCode") || string.IsNullOrWhiteSpace(deserialized["zipCode"]))
            {
                _registrationErrors.Errors.Add("Zip code is mandatory");
                _registrationErrors.Fields.Add("zipCode");
            }

            if (_registrationErrors.Fields.Count > 0)
            {
                throw new InvalidOperationException();
            }

            return "second.html";
        }

        public string GetRegistrationError()
        {
            return JsonConvert.SerializeObject(_registrationErrors);
        }
    }
}
