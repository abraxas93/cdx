using System;
using System.Linq;
using Newtonsoft.Json;
using WaggonerDx.Native.Flows;
using System.Collections.Generic;
using static WaggonerDx.Dal.MainRepository;
using WaggonerDx.Dal;

namespace WaggonerDx.Native.JsBridge
{
    public enum ConsoleLogLevel
    {
        Info = 1,
        Warning = 5,
        Error = 10
    }

    public enum Button
    {
        Close = 1,
        Minimize = 2,
        Keyboard = 3,
        Settings = 4,
        TakeATest = 5
    }

    public enum Page
    {
        Index,
        Main,
        SettingsDeactivation,
        SettingsCalibration,
        SettingsProfile,
        SettingsEmail,
        SettingsTestOrdering,
        SettingsTeamViewer
    }

    public class JsBridge
    {
        private MainFlow _mainFlow;
        private Page _currPage;

        public JsBridge(MainFlow mainFlow)
        {
            _mainFlow = mainFlow;
            _currPage = Page.Index;
        }

        public void Init(string page)
        {
            _currPage = (Page) Enum.Parse(typeof(Page), page);
        }

        public void Log(string message, ConsoleLogLevel logLevel)
        {
        }

        public string BtmMenuClick(string clickedId)
        {
            var buttonClicked = (Button)int.Parse(clickedId);
            switch (buttonClicked)
            {
                case Button.TakeATest:
                    return "second.html";

                case Button.Settings:
                    return "third.html";
            }

            return null;
        }

        public void TopMenuClick(string clickedId)
        {
            var buttonClicked = (Button)int.Parse(clickedId);
            switch (buttonClicked)
            {
                case Button.Close:
                    _mainFlow.Exit();
                    break;

                case Button.Minimize:
                    _mainFlow.Minimize();
                    break;

                default:
                    // TODO log error there
                    break;
            }
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
                _registrationErrors.Errors.Add("Phone number is mandatory");
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
            else
            {
                try
                {
                    var registeredUser = new RegisteredUsers();
                    registeredUser.FirstName = deserialized["firstName"];
                    registeredUser.LastName = deserialized["lastName"];
                    registeredUser.Email = deserialized["email"];
                    registeredUser.PhoneNumber = deserialized["phone"];
                    registeredUser.Address = deserialized["adress"];
                    registeredUser.City = deserialized["city"];
                    registeredUser.State = deserialized["state"];
                    registeredUser.Country = deserialized["country"];
                    registeredUser.ZipCode = deserialized["zipCode"];

                    registeredUser.CompanyName = deserialized["companyName"];
                    registeredUser.WebsiteUrl = deserialized["webSite"];

                    using (var repo = new MainRepository())
                    {
                        repo.Users.Add(registeredUser);
                        repo.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    _registrationErrors.Errors.Add(ex.Message);
                    _registrationErrors.Fields.Add("global");
                }
            }

            return "second.html";
        }

        public string GetRegistrationError()
        {
            return JsonConvert.SerializeObject(_registrationErrors);
        }

        private class MenuItem
        {
            [JsonProperty(PropertyName = "id")]
            public Button Id;

            [JsonProperty(PropertyName = "title")]
            public string Title;

            [JsonProperty(PropertyName = "img")]
            public string Img;

            [JsonProperty(PropertyName = "position")]
            public string Position;

            [JsonProperty(PropertyName = "class")]
            public string Class;

            [JsonProperty(PropertyName = "active")]
            public bool Active;
        }

        public string GetTopMenuItems()
        {
            return JsonConvert.SerializeObject(
                new[]
                {
                    new MenuItem
                    {
                        Id = Button.Close,
                        Title = "Close",
                        Img = "img/plus.png",
                        Position = "right",
                        Class = "control-btn",
                        Active = false
                    },
                    new MenuItem
                    {
                        Id = Button.Minimize,
                        Title = "Minimize",
                        Img = "img/minus.png",
                        Position = "right",
                        Class = "control-btn",
                        Active = false
                    }
                });
        }

        public string GetBotMenuItems()
        {
            var menuItems = new List<MenuItem>
                {
                    new MenuItem
                    {
                        Id = Button.Keyboard,
                        Title = "Keyboard",
                        Class = "",
                        Active = false
                    }
                };

            if (_currPage != Page.Index)
            {
                menuItems.Add(new MenuItem
                {
                    Id = Button.Settings,
                    Title = "Settings",
                    Class = "",
                    Active =
                        (_currPage == Page.SettingsDeactivation) ||
                        (_currPage == Page.SettingsCalibration) ||
                        (_currPage == Page.SettingsProfile) ||
                        (_currPage == Page.SettingsEmail) ||
                        (_currPage == Page.SettingsTestOrdering) ||
                        (_currPage == Page.SettingsTeamViewer)
                });

                menuItems.Add(new MenuItem
                {
                    Id = Button.TakeATest,
                    Title = "Take a test",
                    Class = "",
                    Active = _currPage == Page.Main
                });
            }

            return JsonConvert.SerializeObject(menuItems.ToArray().Reverse());
        }

        public string GetBotTabsItems()
        {
            return @"[{
    text: ""Deactivation"",
    active: false,
    onclick: ""window.location.href='deactivation.html'""
},{
    text:""Calibration"",
    active: true,
    onclick: ""window.location.href='calibration.html'""
},{
    text: ""Profile"",
    active: false,
    onclick: ""window.location.href='profile_calibration.html'""
},{
    text: ""Email"",
    active: false,
    onclick: ""window.location.href='change_email.html'""
},{
    text: ""Test Ordering"",
    active: false,
    onclick: ""window.location.href='third.html'""
},{
    text: ""TeamViewer"",
    active: false,
    onclick: ""window.location.href='teamviewer.html'""
}]";
        }
    }
}
