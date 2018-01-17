using Northwnd.Bl;
using Northwnd.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Northwnd.Srv.Web.Api.Controllers
{
    public class SupplierController : ApiController
    {
        public IHttpActionResult GetSupplier()
        {
            var supplierList = SupplierBl.GetSupplierList();
            return Ok(supplierList);
        }
    }
}
