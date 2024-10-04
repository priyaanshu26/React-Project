

function Input(){
    return(
        <div>

<form class="form-horizontal d-grid gap-2 col-10 mx-auto input">
<fieldset>

{/* <!-- Form Name --> */}
<legend class="fw-bolder" >Add Card</legend>

{/* <!-- Text input--> */}
<div class="form-group m-2">
  <label class="col-md-4 control-label m-2" for="textinput">Image source</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter link to image" class="form-control input-md m-2"/>
    
  </div>
</div>

{/* <!-- Text input--> */}
<div class="form-group m-2">
  <label class="col-md-4 control-label m-2" for="textinput">Name</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter game name" class="form-control input-md m-2"/>
    
  </div>
</div>

{/* <!-- Text input--> */}
<div class="form-group m-2">
  <label class="col-md-4 control-label m-2" for="textinput">Description</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter description" class="form-control input-md m-2"/>
    
  </div>
</div>

{/* <!-- Text input--> */}
<div class="form-group m-2">
  <label class="col-md-4 control-label" for="textinput">Price</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter price" class="form-control input-md m-2"/>
    
  </div>
</div>

{/* <!-- Button (Double) --> */}
<div class="form-group m-2">
  <label class="col-md-4 control-label" for="submit"></label>
  <div class="col-md-8">
    <button id="submit" name="submit" class="btn btn-info m-2">Submit</button>
    <button id="cancel" name="cancel" class="btn btn-danger m-2">Cancel</button>
  </div>
</div>

</fieldset>
</form>

        </div>
    )
}
export default Input;