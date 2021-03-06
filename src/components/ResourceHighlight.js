const ResourceHighlight = ( { resources }  ) => {

    return (
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
              {
                  resources.map( resource => {
                      return (
                        <section key ={ resource.id }className="section">
                        <div className="columns">
                          <div className="column is-8 is-offset-2">
                            <div className="content is-medium">
                              <h2 className="subtitle is-4">{resource.createdAt}</h2>
                              <h1 className="title">{resource.title}</h1>
                              <p>{resource.description}</p>
                            </div>
                          </div>
                        </div>
                      </section>
                      )
                  })
              }
           
          </div>
        </div>
      </section>
    )
  }
  
  export default ResourceHighlight;






// const ResourceHighlight = (params) => {
    

//     return (
//                 <section classNameName="hero ">
//                 <div classNameName="hero-body">
//                 <div classNameName="container">
            
//                     <section classNameName="section">
//                     <div classNameName="columns">
//                         <div classNameName="column is-8 is-offset-2">
//                         <div classNameName="content is-medium">
//                             <h2 classNameName="subtitle is-4">December 25, 2018</h2>
//                             <h1 classNameName="title">Getting Started</h1>
//                             <p>This is a starter template for creating a beautiful, customizable blog with minimal
//                             effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
//                             configuration settings can be found in config</p>
//                         </div>
//                         </div>
//                     </div>
//                     </section>
            
//                     <div classNameName="is-divider"></div>
            
//                     <section classNameName="section">
//                     <div classNameName="columns">
//                         <div classNameName="column is-8 is-offset-2">
//                         <div classNameName="content is-medium">
//                             <h2 classNameName="subtitle is-4">December 25, 2018</h2>
//                             <h1 classNameName="title">Getting Started</h1>
//                             <p>This is a starter template for creating a beautiful, customizable blog with minimal
//                             effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
//                             configuration settings can be found in config</p>
//                         </div>
//                         </div>
//                     </div>
//                     </section>
            
            
//                 </div>
//                 </div>
//                 </section>
//     )
// }
// export default ResourceHighlight;