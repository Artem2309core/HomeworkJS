
    let users = [
    {
        id: 1,
        name: 'petya',
        username: 'petya228',
        email: 'petya@gmail.com',
        phone: '+380991234568',
        address: {
        city: 'Poltava',
        street: 'Shevchenka',
        suite: '12B',
        postcode: '36001'
    }
    },
    ];
    document.write('<div class="users-box">');
    for (let user of users) {
        document.write(`
    <div class="user-block">
      <h2>${user.id} — ${user.name} — ${user.username}</h2>
      <h3>${user.email} — ${user.phone}</h3>
      <div class="address-block">
        <p>City – ${user.address.city}</p>
        <p>Street – ${user.address.street}</p>
        <p>Suite – ${user.address.suite}</p>
        <p>Zip code – ${user.address.postcode}</p>
      </div>
    </div>`);
    }
    document.write('</div>');
