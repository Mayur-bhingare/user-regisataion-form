let Table = () => {
  return (
    <>
      <section className="col-10 m-auto">
        <table
          className="table table-bordered border-warning
         border-2"
        >
          <thead>
            <tr>
              <th width="10%">Sr No</th>
              <th width="20%">First</th>
              <th width="20%">Email</th>
              <th width="20%">Mobile</th>
              <th width="30%">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
