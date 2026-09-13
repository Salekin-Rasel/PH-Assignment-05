<div>
            {
                data.map(technology => (
                <div className="grid grid-cols-12 " key={technology.id}>
                 <section className="col-span-8 grid grid-cols-3 gap-4" >
                     <div className="flex flex-col justify-between">

                        <div className="flex justify-between">
                            <img src={technology.icon} alt={technology.name} />
                            <button>{technology.badge}</button>
                        </div>

                        <div className="flex flex-col justify-between">
                            <h2>{technology.name}</h2>
                            <p>{technology.description}</p>
                        </div>

                        <div className="flex justify-between">
                            <button>{technology.category}</button>
                            <p>{technology.difficulty}</p>
                            <p>{technology.rating}</p>
                        </div>
                    </div>

                    <div>
                        //Stack 
                    </div>
                  </section>
                </div>
                ))
            }
        </div>