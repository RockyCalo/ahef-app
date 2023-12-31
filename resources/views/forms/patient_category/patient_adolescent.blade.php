@extends('forms.layout')
@section('content')


<div class="container">
    <div class="row">
        <h1>Annual Health Examination</h1>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>
                        <a href="{{ url('forms/') }}" class="btn btn-info float-end">Back</a>
                    </h4>
                </div>
                <div class="card-body">
                    <form action="{{ url('forms/patient') }}" method="POST">
                        @csrf
                        <div class="mb-3">

                             <label>Select Patient Category</label>
                             <select name="patient_category_id" class="form-control">
                                 @foreach ($patient_categories as $item)
                                 <option value="{{ $item->id }}">{{ $item->age_category }}</option>
                                 @endforeach
                             </select>
                        </div>
                        {{-- Forms --}}

                        <div class="form-floating mb-3">
                            <input type="text" name="lastname" id="lastname" class="form-control" placeholder="Lastname *">
                            <label for="lastname">Lastname</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="firstname" id="firstname" class="form-control" placeholder="Firstname *">
                            <label for="firstname">Firstname</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="middlename" id="middlename" class="form-control" placeholder="middlename *">
                            <label for="middlename">Middlename</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="suffix" id="suffix" class="form-control" placeholder="Suffix *">
                            <label for="suffix">Suffix</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="age" id="age" class="form-control" placeholder="Age *">
                            <label for="age">Age</label>
                        </div>
                        
                        {{-- Radio button --}}

                        <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="gender" id="gender" value="Male" checked>
                            <label class="form-check-label" for="gender">
                              Male
                            </label>
                          </div>
                          <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="gender" id="gender" value="Female" >
                            <label class="form-check-label" for="gender">
                              Female
                            </label>
                          </div>

                          <div class="form-floating mb-3">
                            <input type="date" name="birthday" id="birthday" class="form-control" placeholder="Birthday *">
                            <label for="birthday">Date of Birth</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="date" name="consult_date" id="consult_date" class="form-control" placeholder="Date of Consult *">
                            <label for="consult_date">Date of Consult</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" name="address" id="address" class="form-control" placeholder="Address *">
                            <label for="address">Address</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" name="religion" id="religion" class="form-control" placeholder="Religion *">
                            <label for="religion">Religion</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" name="civil_status" id="civil_status" class="form-control" placeholder="Civil Status *">
                            <label for="civil_status">Civil Status</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" name="blood_type" id="blood_type" class="form-control" placeholder="Blood Type *">
                            <label for="blood_type">Blood Type</label>
                        </div>

                         {{-- <div class="form-group mb-3">
                            <select class="form-control" name="religion">
                                <option class="hidden"  selected disabled>Please select your Religion</option>
                                <option value="Roman Catholic" name="religion" id="religion">Roman Catholic</option>
                                <option value="Islam" name="religion" id="religion">Islam</option>
                                <option value="Born Again Christian" name="religion" id="religion">Born Again Christian</option>
                                <option value="General Baptist" name="religion" id="religion">General Baptist</option>
                                <option value="Iglesia ni Cristo" name="religion" id="religion">Iglesia ni Cristo</option>
                            </select>
                        </div>

                        <div class="form-group mb-3">
                            <select class="form-control">
                                <option class="hidden"  selected disabled>Civil Status</option>
                                <option value="Single" name="civil_status" id="civil_status">Single</option>
                                <option value="Married" name="civil_status" id="civil_status">Married</option>
                                <option value="Separated" name="civil_status" id="civil_status">Separated</option>
                                <option value="Divorced" name="civil_status" id="civil_status">Divorced</option>
                                <option value="Widow/Widower" name="civil_status" id="civil_status">Widow/Widower</option>
                            </select>
                        </div>

                        <div class="form-group mb-3">
                            <select class="form-control">
                                <option class="hidden"  selected disabled>Blood Type</option>
                                <option value="O" name="blood_type" id="blood_type">Type O</option>
                                <option value="A" name="blood_type" id="blood_type">Type A</option>
                                <option value="AB" name="blood_type" id="blood_type">Type AB</option>
                                <option value="B" name="blood_type" id="blood_type">Type B</option>
                            </select>
                        </div> --}}

                        <div class="form-floating mb-3">
                            <input type="text" name="contact_number" id="contact_number" class="form-control" placeholder="Contact Number *">
                            <label for="contact_number">Contact Number</label>
                        </div>

                        <label for="contact_number">PHIC Registered?</label>
                         <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="phic_register" id="phic_register" value="Yes" checked>
                            <label class="form-check-label" for="phic_register">
                              Yes
                            </label>
                          </div>
                          <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="phic_register" id="phic_register" value="No" >
                            <label class="form-check-label" for="phic_register">
                              No
                            </label>
                          </div>

                          <label for="konsulta_provider">with Konsulta Provider?</label>
                         <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="konsulta_provider" id="phic_register" value="Yes" checked>
                            <label class="form-check-label" for="konsulta_provider">
                              Yes
                            </label>
                          </div>
                          <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="konsulta_provider" id="konsulta_provider" value="No" >
                            <label class="form-check-label" for="konsulta_provider">
                              No
                            </label>
                          </div>

                          <div class="form-floating mb-3">
                            <input type="text" name="phic_number" id="phic_number" class="form-control" placeholder="PHIC ID Number *">
                            <label for="phic_number">PHIC ID #</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" name="employment_status" id="employment_status" class="form-control" placeholder="Employment Status *">
                            <label for="employment_status">Employment Status</label>
                        </div>

                        {{-- <div class="form-group mb-3">
                            <select class="form-control">
                                <option class="hidden"  selected disabled>Employment Status</option>
                                <option value="Employed" name="employment_status" id="employment_status">Employed</option>
                                <option value="Unemployed" name="employment_status" id="employment_status">Unemployed</option>
                                <option value="Self-Employed" name="employment_status" id="employment_status">Self-Employed</option>
                            </select>
                        </div> --}}

                        <div class="form-floating mb-3">
                            <input type="text" name="pwd_number" id="pwd_number" class="form-control" placeholder="PWD ID Number *">
                            <label for="pwd_number">PWD ID #</label>
                        </div>

                        <label for="pantawid_pamilya">4Ps?</label>
                        <div class="form-check mb-3">
                           <input class="form-check-input" type="radio" name="pantawid_pamilya" id="pantawid_pamilya" value="Yes" checked>
                           <label class="form-check-label" for="pantawid_pamilya">
                             Yes
                           </label>
                         </div>
                         <div class="form-check mb-3">
                           <input class="form-check-input" type="radio" name="pantawid_pamilya" id="pantawid_pamilya" value="No" >
                           <label class="form-check-label" for="pantawid_pamilya">
                             No
                           </label>
                         </div>
                         <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="ip_nonip" id="ip_nonip" value="Yes" checked>
                            <label class="form-check-label" for="ip_nonip">
                              IP
                            </label>
                          </div>
                          <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" name="ip_nonip" id="ip_nonip" value="No" >
                            <label class="form-check-label" for="ip_nonip">
                              Non-IP
                            </label>
                          </div>

                          <div class="form-floating mb-3">
                            <input type="text" name="ethnicity" id="ethnicity" class="form-control" placeholder="Ethnicity *">
                            <label for="ethnicity">Ethnicity</label>
                        </div>

                        {{-- BUTTON SAVE --}}
                        <div class="mb-3">
                            <button class="btn btn-secondary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>









@endsection
