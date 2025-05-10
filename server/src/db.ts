const users = [
    { id: 1, name: 'Alice Johnson', age: 28, email: 'alice.johnson@example.com' },
    { id: 2, name: 'Bob Smith', age: 34, email: 'bob.smith@example.com' },
    { id: 3, name: 'Charlie Brown', age: 22, email: 'charlie.brown@example.com' },
    { id: 4, name: 'Diana Prince', age: 30, email: 'diana.prince@example.com' },
    { id: 5, name: 'Ethan Hunt', age: 35, email: 'ethan.hunt@example.com' },
    { id: 6, name: 'Fiona Gallagher', age: 27, email: 'fiona.gallagher@example.com' },
    { id: 7, name: 'George Martin', age: 45, email: 'george.martin@example.com' },
    { id: 8, name: 'Hannah Baker', age: 24, email: 'hannah.baker@example.com' },
    { id: 9, name: 'Ian Malcolm', age: 50, email: 'ian.malcolm@example.com' },
    { id: 10, name: 'Jane Doe', age: 29, email: 'jane.doe@example.com' },
    { id: 11, name: 'Kevin Hart', age: 40, email: 'kevin.hart@example.com' },
    { id: 12, name: 'Laura Palmer', age: 26, email: 'laura.palmer@example.com' },
    { id: 13, name: 'Michael Scott', age: 38, email: 'michael.scott@example.com' },
    { id: 14, name: 'Nina Simone', age: 33, email: 'nina.simone@example.com' },
    { id: 15, name: 'Oscar Wilde', age: 46, email: 'oscar.wilde@example.com' },
    { id: 16, name: 'Pam Beesly', age: 31, email: 'pam.beesly@example.com' },
    { id: 17, name: 'Quentin Tarantino', age: 55, email: 'quentin.tarantino@example.com' },
    { id: 18, name: 'Rachel Green', age: 28, email: 'rachel.green@example.com' },
    { id: 19, name: 'Steve Rogers', age: 32, email: 'steve.rogers@example.com' },
    { id: 20, name: 'Tony Stark', age: 42, email: 'tony.stark@example.com' }
  ];


  export const db = {
    user:{
      findMany: () => {
        return users;
      }, 

      findUnique: (id: number) => {
        return users.find(user => user.id === id);
      },

    }
  };