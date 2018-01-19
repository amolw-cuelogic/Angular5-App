using Northwnd.Dal;
using Northwnd.Utility.Log;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using log4net;
using System.Data.Entity.Migrations;

namespace Northwnd.Bl
{
    public class SupplierBl
    {
        static ILog applogmanager = AppLogManager.GetLogger();
        public static List<Supplier> GetSupplierList()
        {
            try
            {
                using (var dbCtx = new NORTHWNDEntities())
                {
                    dbCtx.Configuration.ProxyCreationEnabled = false;
                    var SupplierList = dbCtx.Suppliers.ToList();
                    return SupplierList;
                }
            }
            catch (Exception ex)
            {
                applogmanager.Error(ex);
                return new List<Supplier>();
            }
        }

        public static Supplier GetSupplierDetails(int id)
        {
            try
            {
                using (var dbCtx = new NORTHWNDEntities())
                {
                    dbCtx.Configuration.ProxyCreationEnabled = false;
                    var SupplierList = dbCtx.Suppliers.Where(m => m.SupplierID == id).FirstOrDefault();
                    SupplierList = SupplierList ?? new Supplier();
                    return SupplierList;
                }
            }
            catch (Exception ex)
            {
                applogmanager.Error(ex);
                return new Supplier();
            }
        }

        public static void UpdateSupplierDetails(Supplier objSupplier)
        {
            try
            {
                using (var dbCtx = new NORTHWNDEntities())
                {
                    dbCtx.Suppliers.AddOrUpdate(objSupplier);
                    dbCtx.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                applogmanager.Error(ex);
            }
        }

        public static string DeleteSupplierDetails(int SupplierId)
        {
           
                using (var dbCtx = new NORTHWNDEntities())
                {
                    var obj = dbCtx.Suppliers.Where(m =>m.SupplierID == SupplierId).FirstOrDefault();
                    dbCtx.Suppliers.Remove(obj);
                    dbCtx.SaveChanges();
                    return "";
                }
            
        }

    }
}
