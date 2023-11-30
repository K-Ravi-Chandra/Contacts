using ContactAPI.Models;


// Declare all the Functions

namespace ContactAPI.Services
{
    public interface IContactService
    {
        void AddContact(Contact contact);
        Contact GetContact(int id);
        List<Contact> GetContacts();
        void EditContact(Contact contact);
        void DeleteContact(int id);
    }
}
