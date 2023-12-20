@extends('forms.layout')
@section('content')

<div class="container">
    <div class="row">
        <h1>Annual Health Examination</h1>
        <br />
        <br />
        <div class="col-md-12">

            @if (session('message'))
                <div class="alert alert-success">{{ session('message') }}</div>
            @endif


            <div class="card">
                <div class="card-header">
                    <h4>Patient Category
                        <a href="{{ url('forms/category/enroll') }}" class="btn btn-secondary float-end">Add Category</a>
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Age Category</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($patient_categories as $item)
                            <tr>
                                <td>{{ $item->id }}</td>
                                <td>{{ $item->age_category }}</td>
                                {{-- <td>
                                    <a href="{{ url('forms/category/'.$item->id.'/delete') }}" class="btn btn-danger">Delete</a>
                                </td> --}}
                            </tr>

                            @endforeach

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>






@endsection
