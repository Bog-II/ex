<script>
  let userLoadeed = false;

  let users = [];

  const url = 'https://randomuser.me/api?results=20';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      users = json.results;
      userLoadeed = true;
    } catch (error) {
      console.log('error', error);
    }
  };

  fetchData();
</script>

<table id="users-table">
  {#if userLoadeed}
    <thead>
      <tr>
        <th>id</th>
        <th>gender</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>email</th>
        <th>photo</th>
      </tr>
    </thead>

    <tbody>
      {#each users as { gender, id: { value: id }, name: { first: firstName, last: lastName }, email, picture: { thumbnail: pictureSRC } }}
        <tr>
          <td>{id}</td>
          <td>{gender}</td>
          <th>{firstName}</th>
          <th>{lastName}</th>
          <th>{email}</th>
          <th>
            <img src={pictureSRC} alt="picture {firstName + lastName}" />
          </th>
        </tr>
      {/each}
    </tbody>
  {/if}
</table>

<style>
  #users-table {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
