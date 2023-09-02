import React from "react";
import styled from "styled-components";

export default function Header (props) {
    const StyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    `
    const {search, changeHandler} = props;
    return (
    <div>
        <header>
            <h1>Star Wars</h1>
            <input 
                type="text" 
                placeholder="Search" 
                value={search} 
                onChange={changeHandler} 
                name="Search"
                autoFocus />
        </header>
    </div>
    )
}