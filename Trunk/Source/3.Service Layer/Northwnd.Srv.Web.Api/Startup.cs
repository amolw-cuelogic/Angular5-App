using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using System.Web;

[assembly: OwinStartup(typeof(Northwnd.Srv.Web.Api.Startup))]

namespace Northwnd.Srv.Web.Api
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
            //if (HttpContext.Current.Request.HttpMethod != "OPTIONS") return;
            //HttpContext.Current.Response.AddHeader("Cache-Control", "no-cache");
            //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
            //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
            //HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
            //HttpContext.Current.Response.End();

            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                HttpContext.Current.Response.Flush();
            }

        }

    }
}
