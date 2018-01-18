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
        public void PostSaveSupplier([FromBody]Supplier da)
        {
        }

    }
}
