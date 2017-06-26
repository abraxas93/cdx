using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.StaticFiles.Infrastructure;
using Owin;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Routing;

namespace ColorDx.Main.Host
{
    public class Startup
    {
        // This code configures Web API. The Startup class is specified as a type
        // parameter in the WebApp.Start method.
        public void Configuration(IAppBuilder appBuilder)
        {
            HttpConfiguration config = new HttpConfiguration();

            // Force JSON even if HTML requested - for easier debuging, we don't need HTML at all
            config.Formatters.JsonFormatter.SupportedMediaTypes
                .Add(new MediaTypeHeaderValue("text/html"));

            // Configure Web API for self-host.
            config.Routes.MapHttpRoute(
                "FilesRoute",
                "static/{*pathInfo}",
                null,
                null,
                handler: new StopRoutingHandler());

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            appBuilder.UseWebApi(config);

            var staticOptions = new StaticFileOptions(new SharedOptions {
                RequestPath = new PathString("/static"),
                FileSystem = new PhysicalFileSystem("StaticContent") })
            {
                ServeUnknownFileTypes = false,
                DefaultContentType = "application/octet-stream"
            };
            appBuilder.UseStaticFiles(staticOptions);
        }
    }
}
