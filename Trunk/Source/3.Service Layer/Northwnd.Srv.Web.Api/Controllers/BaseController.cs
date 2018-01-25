using Northwnd.Srv.Web.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Northwnd.Srv.Web.Api.Controllers
{
    public class BaseController : ApiController
    {

        internal HttpResponseMessage CreateFailResponse(Exception ex)
        {
            return Request
                    .CreateResponse(HttpStatusCode.InternalServerError,
                        new ErrorModel
                        {
                            ErrorKey = "Not found",
                            ErrorMessage = ex.InnerException != null ? ex.InnerException.Message : ex.Message
                        }, "application/json");
        }

        internal HttpResponseMessage CreatedSuccessResponse(object output, string format)
        {
            return Request.CreateResponse(HttpStatusCode.OK, output, format);
        }
    }
}
