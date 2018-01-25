using Microsoft.AspNet.Identity;
using Northwnd.Bl;
using Northwnd.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;
using System.Web.Http.Results;

namespace Northwnd.Srv.Web.Api.Controllers
{
    [Authorize]
    public class SupplierController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Logout()
        {
            var authentication = HttpContext.Current.GetOwinContext().Authentication;
            authentication.SignOut(DefaultAuthenticationTypes.ExternalBearer);

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        [HttpGet]
        public IHttpActionResult GetSupplierList()
        {
            var supplierList = SupplierBl.GetSupplierList();
            return Ok(supplierList);
        }

        [HttpGet]

        public IHttpActionResult GetSupplierDetails(int id)
        {
            var supplierList = SupplierBl.GetSupplierDetails(id);
            return Ok(supplierList);
        }

        [HttpPost]
        public IHttpActionResult PostSaveSupplier([FromBody]Supplier da)
        {
            SupplierBl.UpdateSupplierDetails(da);
            return Ok();
        }

        protected override ExceptionResult InternalServerError(Exception exception)
        {
            return base.InternalServerError(exception);
        }

        protected override NotFoundResult NotFound()
        {
            return base.NotFound();
        }

        public HttpResponseMessage DeleteSupplier(int id)
        {
            var res = SupplierBl.DeleteSupplierDetails(id);
            if (!string.IsNullOrEmpty(res))
            {
                HttpError err = new HttpError(res);
                return Request.CreateResponse(HttpStatusCode.NotFound, err);
            }
            else
                return Request.CreateResponse(HttpStatusCode.OK);
        }

        

    }
}
