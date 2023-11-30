using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ContactAPI.Models;
using ContactAPI.Services;

// Just link the Routes with the specific Function Call.

namespace ContactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    [AllowAnonymous]
    
    public class ContactController : ControllerBase
    {
        private readonly ContactService contactService;

        public ContactController(ContactService contactService)
        {
            this.contactService = contactService;
        }

        //------------------------------------------------------------------

        [HttpGet, Route("GetAll")]
        public IActionResult GetAllContacts()
        {
            try
            {
                List<Contact> contacts = contactService.GetContacts();
                return StatusCode(200, contacts);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //------------------------------------------------------------------

        [HttpGet, Route("GetContact/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                Contact contact = contactService.GetContact(id);
                if (contact != null)
                    return StatusCode(200, contact);
                else
                    return StatusCode(404, new JsonResult("Invalid Id"));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //------------------------------------------------------------------

        [HttpPost, Route("AddContact")]
        public IActionResult AddContact(Contact contact)
        {
            try
            {
                contactService.AddContact(contact);
                return StatusCode(200, contact);
            }
            catch (Exception)
            {
                throw;
            }
        }

        //------------------------------------------------------------------

        [HttpDelete,Route("DeleteContact/{id}")]
        public IActionResult DeleteContact(int id)
        {
            try
            {
                contactService.DeleteContact(id);
                return StatusCode(200, new JsonResult("Contact Deleted"));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //------------------------------------------------------------------

        [HttpPut, Route("EditContact")]
        public IActionResult EditContact(Contact contact)
        {
            try
            {
                contactService.EditContact(contact);
                return StatusCode(200, contact);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //------------------------------------------------------------------
    }
}
