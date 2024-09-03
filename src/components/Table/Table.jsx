import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByGeneration } from "../../Redux/Actions/index";
import { AppPagination } from "../Pagination/Pagination";
import { makeStyle } from "../../Data/Data";
import "./Table.css";

export default function BasicTable() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(6);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  useEffect(() => {
    if (allPokemons.length > 500) {
      dispatch(filterByGeneration());
    }
  });

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Table">
      <h3>Pokémon List</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Attack</TableCell>
              <TableCell align="left">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {currentPokemons.map((pokemon) => (
              <TableRow
                key={pokemon.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{`#${pokemon.id}`}</TableCell>
                <TableCell>
                  <div style={{width: "150px", heigth: "150px"}}>
                    <img
                      className="gif"
                      src={pokemon.gifFrontDefault}
                      alt={pokemon.name}
                    />
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </TableCell>
                <TableCell align="left">{pokemon.attack}</TableCell>
                <TableCell align="left">
                  {pokemon.types.length > 1 ? (
                    <>
                      <span
                        className="type"
                        style={makeStyle(pokemon.types[0].name)}
                      >
                        {pokemon.types[0].name.charAt(0).toUpperCase() +
                          pokemon.types[0].name.slice(1)}
                      </span>
                      <span
                        className="type"
                        style={makeStyle(pokemon.types[1].name)}
                      >
                        {pokemon.types[1].name.charAt(0).toUpperCase() +
                          pokemon.types[1].name.slice(1)}
                      </span>
                    </>
                  ) : (
                    <span
                      className="type"
                      style={makeStyle(pokemon.types[0].name)}
                    >
                      {pokemon.types[0].name.charAt(0).toUpperCase() +
                        pokemon.types[0].name.slice(1)}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AppPagination
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paged={paged}
        />
      </TableContainer>
    </div>
  );
}
