

function Input(){

    const submit = (e) => {
       
    }

    return(
        <div>

        <form className="form-horizontal d-grid gap-2 col-10 mx-auto input">
        <fieldset>

        {/* <!-- Form Name --> */}
        <legend className="fw-bolder" >Add Card</legend>

          {/* <!-- Text input--> */}
          <div className="form-group m-2">
            <label className="col-md-4 control-label m-2">Image source</label>  
            <div className="col-md-4">
            <input id="textinput" name="textinput" type="text" placeholder="enter link to image" className="form-control input-md m-2"/>
              
            </div>
          </div>

          {/* <!-- Text input--> */}
          <div className="form-group m-2">
            <label className="col-md-4 control-label m-2">Name</label>  
            <div className="col-md-4">
            <input id="textinput" name="textinput" type="text" placeholder="enter game name" className="form-control input-md m-2"/>
              
            </div>
          </div>

          {/* <!-- Text input--> */}
          <div className="form-group m-2">
            <label className="col-md-4 control-label m-2">Description</label>  
            <div className="col-md-4">
            <input id="textinput" name="textinput" type="text" placeholder="enter description" className="form-control input-md m-2"/>
              
            </div>
          </div>

          {/* <!-- Text input--> */}
          <div className="form-group m-2">
            <label className="col-md-4 control-label">Price</label>  
            <div className="col-md-4">
            <input id="textinput" name="textinput" type="text" placeholder="enter price" className="form-control input-md m-2"/>
              
            </div>
          </div>

          {/* <!-- Button (Double) --> */}
          <div className="form-group m-2">
            <label className="col-md-4 control-label"></label>
            <div className="col-md-8">
              <button 
                className="btn btn-info m-2"
                name="submit"
                id="submit" 
                onClick={ e => submit(e) }
              > Submit </button>
              <button id="cancel" name="cancel" className="btn btn-danger m-2">Cancel</button>
            </div>
          </div>

          </fieldset>
          </form>

        </div>
    )
}
export default Input;