import React, {Component} from 'react';

export default function Film(props){
    return(
        <div>
            <p>
                <a href={props.href}>
                {props.children}
                </a>
            </p>
        </div>
    )
}