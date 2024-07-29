const ListandKeys = () => {
    const UserData = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org"
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca"
        }

    ]
    return(
        <div>
           <h3>ListandKeys</h3>
           <table>
             <tr>
                <th>id</th>
                <th>name</th>
                <th>UserName</th>
                <th>email</th>
            </tr>
            {
                UserData && UserData.length > 0 && UserData.map((user)=> (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>

                ))
            }
           </table>
        </div>
    )
}
export default ListandKeys