const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div className="form-group row justify-content-center">
                        <div class="col-6">
                            <label htmlFor="name">Place Name</label>
                            <input
                            className="form-control"
                            id="name"
                            name="name" required />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div class="col-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input
                            className="form-control"
                            id="pic"
                            name="pic" />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div class="col-6">
                            <label htmlFor="city">City</label>
                            <input
                            className="form-control"
                            id="city"
                            name="city" />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div class="col-6">
                            <label htmlFor="state">State</label>
                            <input
                            className="form-control"
                            id="state"
                            name="state" />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div class="col-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                            className="form-control"
                            id="cuisines"
                            name="cuisines" required />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div class="col-4">
                            <label for="founded">Founded Year</label>
                            <input
                            type="number"
                            className="form-control"
                            id="founded"
                            name="founded"
                            value={new Date().getFullYear()} />
                        </div>
                    </div>
                    <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form