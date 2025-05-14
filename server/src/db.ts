const users = [
    { id: 1, name: 'Alice Johnson', age: 28, email: 'alice.johnson@example.com', password: 'Alice@123' },
    { id: 2, name: 'Bob Smith', age: 34, email: 'bob.smith@example.com', password: 'Bob@234' },
    { id: 3, name: 'Charlie Brown', age: 22, email: 'charlie.brown@example.com', password: 'Charlie@345' },
    { id: 4, name: 'Diana Prince', age: 30, email: 'diana.prince@example.com', password: 'Diana@456' },
    { id: 5, name: 'Ethan Hunt', age: 35, email: 'ethan.hunt@example.com', password: 'Ethan@567' },
    { id: 6, name: 'Fiona Gallagher', age: 27, email: 'fiona.gallagher@example.com', password: 'Fiona@678' },
    { id: 7, name: 'George Martin', age: 45, email: 'george.martin@example.com', password: 'George@789' },
    { id: 8, name: 'Hannah Baker', age: 24, email: 'hannah.baker@example.com', password: 'Hannah@890' },
    { id: 9, name: 'Ian Malcolm', age: 50, email: 'ian.malcolm@example.com', password: 'Ian@901' },
    { id: 10, name: 'Jane Doe', age: 29, email: 'jane.doe@example.com', password: 'Jane@012' },
    { id: 11, name: 'Kevin Hart', age: 40, email: 'kevin.hart@example.com', password: 'Kevin@123' },
    { id: 12, name: 'Laura Palmer', age: 26, email: 'laura.palmer@example.com', password: 'Laura@234' },
    { id: 13, name: 'Michael Scott', age: 38, email: 'michael.scott@example.com', password: 'Michael@345' },
    { id: 14, name: 'Nina Simone', age: 33, email: 'nina.simone@example.com', password: 'Nina@456' },
    { id: 15, name: 'Oscar Wilde', age: 46, email: 'oscar.wilde@example.com', password: 'Oscar@567' },
    { id: 16, name: 'Pam Beesly', age: 31, email: 'pam.beesly@example.com', password: 'Pam@678' },
    { id: 17, name: 'Quentin Tarantino', age: 55, email: 'quentin.tarantino@example.com', password: 'Quentin@789' },
    { id: 18, name: 'Rachel Green', age: 28, email: 'rachel.green@example.com', password: 'Rachel@890' },
    { id: 19, name: 'Steve Rogers', age: 32, email: 'steve.rogers@example.com', password: 'Steve@901' },
    { id: 20, name: 'Tony Stark', age: 42, email: 'tony.stark@example.com', password: 'Tony@012' }
  ];


 export  const db = {
    user: {
        findMany: () => {
            return users
        },
        findById: (id: number ) => {
            return users.find( u=> u.id === id)
        },
        create: () => {
            
        },
        delete: () => {

        },
        update: () => {

        }

    },
    auth: {
        checkPassword: (email: string, password: string) => {
            return users.find( u => u.email === email && u.password === password)
        },
        generateToken: (userId: number) => {
            return 'token'
        },
         }   

    }






  }