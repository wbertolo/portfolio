// 'use client';
import { useEffect } from "react";
import { useState } from 'react';

export default function CatSelector( params:any ) {

    const [newSelection, setNewSelection] = useState('all');
    useEffect(() => {
        params.handleCategoryChange(newSelection);
    });
    
    return (
        <select 
            className="bg-gray-700 border border-gray-600 text-sm focus:ring-blue-500 focus:border-blue-500 block placeholder-gray-400 text-white p-2.5 mb-5 mx-auto"
            onChange={function(e){setNewSelection(e.target.value)}}
        >
            <option value="electronics">Electronics</option>
            <option value="media">Media</option>
            <option value="music">Music</option>
            <option value="sass">Sass</option>
        </select>
    )
}