
# 🧑‍🎓StudentHub: A Collaborative Project 

**StudentHub**  is a comprehensive student management system that offers an interactive and user-friendly interface with real-time data updates. It enables efficient handling of student records, including personal details, academic performance, and email functionality.

## 💻 Tech Stack

- **Frontend:** Angular 14, Angular Material

- **Backend:** .NET 8

- **Database:** SQL Server Management Studio 19

- **API:** SMTP, PositionStack

Other Tools & Libraries:

- **ag-Grid** for table rendering

- **RxJS** for handling asynchronous data fetching
- **SMTP API** for Client-Sever Email Interaction 
- **PositionStack API** for fetching the GeoLocation 
- **OpenLayer API** for Map Interface.


## 🎯 Features

**1. Student Record Management:** View, update, and manage student information by clicking on the ID.

**2. Description:** On clicking the name, you can see a personalized avatar and a short introduction on each user. The data is fetched from the Database and displayed in the UI.

**3. Email Integration:** Send emails to students directly from the browser. The Angular front end sends an email request to the .NET backend ensuring the application remains responsive while emails are being sent.

**4. Location Service Integration:** Visualizes student addresses on an interactive map. Whenever a student’s address is changed, the UI updates dynamically.

**5. Rank analysis and Marks Calculation:** Displays individual subject marks and calculates total marks dynamically. It also computes the highest score in a dataset.


## 🚀 API Reference

#### 🚀 METHOD + APIs 

```http
   GET      /api/user/test
   GET	    /api/user/getUsers
   POST	    /api/user/addUser
   PUT	    /api/user/updateUser
   DELETE	/api/user/deleteUser/{id}
   PATCH	/api/user/updateAddress/{id}
   POST     /api/email/send
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/api/user/test` | `JSON` | Test database connection |
| `/api/user/getUsers` | `JSON` | Fetch all users |
| `/api/user/addUser` | `JSON` | Add a new user |
| `/api/user/updateUser` | `JSON` | Update user details |
| `/api/user/deleteUser/{id}` | `JSON` | Delete a user |
| `/api/user/updateAddress/{id}` | `JSON` | Update user address |
| `/api/email/send` | `JSON` | Send an email with optional attachments |



## ➡️ Contribution Guidelines

- Fork the repository.
- Create a new feature branch 
```
(git checkout -b feature-name)
```

- Commit your changes 
```
(git commit -m "Your commit")
```

- Push to the branch

```
(git push origin feature-name)
```

- Create a Pull Request

## 🎥 Demo

[https://drive.google.com/file/d/1jKOsshia_WZAQsSvinD6ddoYwo1yVNm7/view?usp=sharing]

## 🪪 License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


## 🔛 Contributed By

This project is made by the following developers:

- Anish Joshi
- Jyotsna Bhatia
- Kumar Baibhav
- Radhika Sardeshpande
- Paridhi Kumar
- Prenitha Rajesh



