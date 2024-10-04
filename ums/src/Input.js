

function Input(){
    return(
        <div>
            <h1>Wishlist</h1>
            <form class="form-horizontal">
<fieldset>

{/* <!-- Form Name --> */}
<legend>Add Card</legend>

{/* <!-- Text input--> */}
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Image source</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter link to image" class="form-control input-md"/>
    
  </div>
</div>

{/* <!-- Text input--> */}
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Name</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter game name" class="form-control input-md"/>
    
  </div>
</div>

{/* <!-- Text input--> */}
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Description</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter description" class="form-control input-md"/>
    
  </div>
</div>

{/* <!-- Text input--> */}
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Price</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="enter price" class="form-control input-md"/>
    
  </div>
</div>

{/* <!-- Button (Double) --> */}
<div class="form-group">
  <label class="col-md-4 control-label" for="submit"></label>
  <div class="col-md-8">
    <button id="submit" name="submit" class="btn btn-info">Submit</button>
    <button id="cancel" name="cancel" class="btn btn-danger">Cancel</button>
  </div>
</div>

</fieldset>
</form>

        </div>
    )
}
export default Input;