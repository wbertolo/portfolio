export default function CatSelector( params:any ) {

    return (
        <select 
            className="bg-gray-700 border border-gray-600 text-sm focus:ring-blue-500 focus:border-blue-500 block placeholder-gray-400 text-white p-2.5 mb-5 mx-auto"
            onChange={function(e) {params.setCategory(e.target.value)}}
        >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Media">Media</option>
            <option value="Music">Music</option>
            <option value="SaaS">Sass</option>
        </select>
    )
}