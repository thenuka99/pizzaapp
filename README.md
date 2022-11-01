# pizzaapp
admin panel for pizza shop chain
## E-Channeling
This is an admin panel for pizza shop chain web application. With the below functionalities.

1. Patients/users can search doctors' availability in various hospitals by choosing a hospital or specialization or doctors name.

2. When the search results are displayed, the user can place an appointment by filling a form.

3. The admins of the system can register the doctors to the system.

4. The admins of the system can create a doctor's session by allocating a date and a time slot, in a particular hospital.

5. Doctors list and channeling time slots are displayed.

So basically, this system is having customer interaction as well as admin interaction functionalities.

## Folder/file structure
The names of the folders and files. 

moraead
├── pizzaapp                            
|   ├── controller                              
| 	|   ├── AppointmentController.java           
| 	|   ├── ChannelController.java     
| 	|   ├── DoctorController.java  
| 	|   ├── HospitalController.java
| 	|   ├── SearchController.java
| 	|   ├── SpecializationController.java
|   ├── model                              
| 	|   ├── Appointment           
| 	|   ├── Channel     
| 	|   ├── Doctor  
| 	|   ├── DoctorHospital
| 	|   ├── Hospital
| 	|   ├── Specialization
|   ├── repository                              
| 	|   ├── IAppointmentRepository           
| 	|   ├── IChannelRepository 
| 	|   ├── IDoctorRepository  
| 	|   ├── IDoctorHospitalRepository
| 	|   ├── IHospitalRepository
| 	|   ├── ISpecializationRepository
|   ├── service
| 	|   ├── implementation
| 	|   |    ├── AppointmentService
| 	|   |    ├── ChannelService
| 	|   |    ├── DoctorService
| 	|   |    ├── HospitalService
| 	|   |    ├── SearchService
| 	|   |    ├── SpecializationService
| 	|   ├── IAppointmentService           
| 	|   ├── IChannelService 
| 	|   ├── IDoctorService  
| 	|   ├── IHospitalService
| 	|   ├── ISearchService
| 	|   ├── ISpecializationService

## Group Members
 * Janith Herath
 * 
 * 
 * 
 * 
