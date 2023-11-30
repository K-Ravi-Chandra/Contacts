using ContactAPI.Models;
using System.Data.SqlClient;

// Now Define all the Declared Functions & Connect with SQL

namespace ContactAPI.Services
{
    public class ContactService : IContactService
    {
        // ------------------ SQL Connection Code ---------------------------------

        SqlConnection connection = null;
        SqlCommand command = null;
        private IConfiguration configuration;

        public ContactService(IConfiguration configuration)
        {
            this.configuration = configuration;
            connection = new SqlConnection(configuration.GetConnectionString("GEPConnection"));
        }

        //-------------------------------------------------------------------------

        public void AddContact(Contact contact)
        {
            try
            {   // Write the Command exactly as per the SQL Query Language.
                command = new SqlCommand($"insert into contact values('{contact.firstname}','{contact.lastname}','{contact.gender}','{contact.dob}','{contact.email}','{contact.phone}','{contact.city}','{contact.state}','{contact.country}','{contact.picture}')", connection);
                connection.Open(); //open the connection to the db
                command.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                connection.Close();
            }
        }

        //-------------------------------------------------------------------------

        public void DeleteContact(int id)
        {
            try
            {
                command = new SqlCommand($"Delete from contact where Id={id}", connection);
                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                connection.Close();
            }
        }

        //-------------------------------------------------------------------------


        public void EditContact(Contact contact)
        {
            try
            {
                command = new SqlCommand($"Update contact set firstname='{contact.firstname}',lastname='{contact.lastname}',gender='{contact.gender}',dob='{contact.dob}',email='{contact.email}',phone='{contact.phone}',city='{contact.city}',state='{contact.state}',country='{contact.country}',picture='{contact.picture}' " + $"where id={contact.Id}", connection);
                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();

            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                connection.Close();
            }
        }

        //-------------------------------------------------------------------------


        public Contact GetContact(int id)
        {
            try
            {
                Contact contact = null;
                command = new SqlCommand($"select * from contact where id={id}", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    reader.Read(); //reads a record from the datareader
                    
                    //converting reader data to contact object
                    contact = new Contact()
                    {
                        Id = (int)reader[0],
                        firstname = reader[1].ToString(),
                        lastname = reader[2].ToString(),
                        gender = reader[3].ToString(),
                        dob = reader[4].ToString(),
                        email = reader[5].ToString(),
                        phone = reader[6].ToString(),
                        city = reader[7].ToString(),
                        state = reader[8].ToString(),
                        country = reader[9].ToString(),
                        picture = reader[10].ToString()
                    };
                }
                return contact;
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                connection.Close();
            }

        }

        //-------------------------------------------------------------------------


        public List<Contact> GetContacts()
        {
            try
            {
                List<Contact> contacts = new List<Contact>();
                command = new SqlCommand($"select * from contact", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        //add contacts to list
                        contacts.Add(new Contact()
                        {
                            Id = (int)reader[0],
                            firstname = reader[1].ToString(),
                            lastname = reader[2].ToString(),
                            gender = reader[3].ToString(),
                            dob = reader[4].ToString(),
                            email = reader[5].ToString(),
                            phone = reader[6].ToString(),
                            city = reader[7].ToString(),
                            state = reader[8].ToString(),
                            country = reader[9].ToString(),
                            picture = reader[10].ToString()
                        });
                    }

                }
                return contacts;
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                connection.Close();
            }
        }

        //-------------------------------------------------------------------------

    }
}
