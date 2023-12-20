
@extends('forms.layout')
@section('content')


<div class="container">
    <div class="row">
        <h1>Annual Health Examination</h1>
        <br />
        <br />
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>
                        <a href="{{ url('forms/category') }}" class="btn btn-info float-end">Back</a>
                    </h4>
                </div>
                <div class="card-body">
                    <form action="{{ url('forms/category') }}" method="POST">
                        @csrf

                        <div class="mb-3">
                            <label>Age Category</label>
                            <input type="text" name="age_category" class="form-control">
                        </div>

                        <div class="mb-3">
                            <button class="btn btn-success">Save</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>





@endsection
