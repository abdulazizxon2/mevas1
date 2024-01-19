import React from "react";

export default function Yoqtirligan({ data }) {
  let malumotlar = data.filter((p) => p.like === true);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>name </th>
            <th>price </th>
            <th>chegirma</th>
            <th> yoqtirilgan </th>
            <th>soni</th>
          </tr>
        </thead>
        <tbody>
          {malumotlar.length > 0 ? (
            malumotlar.map((elem, index) => {
              return (
                <tr key={elem.id}>
                  <th> {index + 1} </th>
                  <td> {elem?.name} </td>
                  <td> {elem?.money} </td>
                  <td> {elem?.discount} </td>
                  <td> {elem?.like ? "yoqdi" : "yoqmadi"} </td>
                  <td> {elem?.count} </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={100}
                style={{ textAlign: "center", fontSize: "30px" }}
              >
                no Data...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
