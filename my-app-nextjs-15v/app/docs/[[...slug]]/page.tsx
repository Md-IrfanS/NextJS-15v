import React from 'react'

const DocDetailsPage =  ({params}: {params: {slug?: string[]}}) => {
    const {slug} = params;
    if (!slug) {
        return (
            <div>DocDetailsPage</div>
          )
    }
    if (slug.length == 1) {
        return (
            <div>
                <h1>Feature - {slug[0]}</h1>
            </div>
        )
    }
    if (slug.length == 2) {
        return (
            <div>
                <h1>concept - {slug.join(" ")}</h1>
            </div>
        )
    }
    if (slug.length == 3) {
        return (
            <div>
                <h2>Example - {slug.join("")}</h2>
            </div>
        )
    }
    return (
        <div>DocDetailsPage</div>
      )
}

export default DocDetailsPage;