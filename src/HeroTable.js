import React from 'react';


function onHeroTableClick(e, data){
    let ev = new CustomEvent("row_select", {detail: data, bubbles: true});
    document.dispatchEvent(ev);
}

const HeroTable = ({ data }) => {
  return (
    <div>
        <style>
        {`
          .superhero-table {
            width: 100%;
            border-collapse: collapse;
          }

          .superhero-table tr:hover {
            background-color: blue;
            opacity: 0.7;
          }

          .superhero-table tr:hover td {
            color: white !important; /* Change the text color to white */
          }

          .superhero-table th,
          .superhero-table td {
            padding: 8px;
            border: 1px solid #dddddd;
            text-align: left;
          }

          .superhero-table th {
            background-color: grey;
            font-weight: bold;
          }
        `}
      </style>

      <table className='superhero-table'>
            <thead>
                <tr>
                <th>Superhero</th>
                <th>Publisher</th>
                <th>Alter Ego</th>
                <th>First Appearance</th>
                <th>Characters</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <tr key={index} onClick={(e)=> onHeroTableClick(e, item)}>
                    <td>{item.superhero}</td>
                    <td>{item.publisher}</td>
                    <td>{item.alter_ego}</td>
                    <td>{item.first_appearance}</td>
                    <td>{item.characters}</td>
                </tr>
                ))}
            </tbody>
            </table>
    </div>
        
   
  );
};

export default HeroTable;
