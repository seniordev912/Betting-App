

@php

    $candidate = \App\Models\Candidate::find(1);

@endphp

<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <table>
            <tr>
                <td>
                    Logo
                </td>
                <td colspan="2">
                    text
                </td>
            </tr>
            <tr>
                <td>
                    Dane kandydata
                </td>
                <td>
                        Imię(Imiona)
                    <br>Nazwisko
                    <br>PESEL
                    <br>Data urodzenia
                    <br>Miejsce urodzenia
                </td>
                <td>
                        {{ $candidate->name }}
                    <br>{{ $candidate->surname }}
                    <br>{{ $candidate->person_id }}
                    <br>{{ $candidate->date_of_birth }}
                    <br>{{ $candidate->place_of_birth }}
                </td>
            </tr>
            <tr>
                <td>
                    Adres zameldowania
                </td>
                <td>
                        {{ $candidate->street }} {{ $candidate->house_number }}/{{ $candidate->apartment_number }}
                    <br>{{ $candidate->post_code }}
                    <br>poczta: {{ $candidate->post_office }}
                    <br>Województwo
                    <br>Powiat
                    <br>Gmina
                </td>
                <td>
                    <br>
                    <br>
                    <br>{{ $candidate->voivodeshipName }}
                    <br>{{ $candidate->countyName }}
                    <br>{{ $candidate->communityName }}
                </td>
            </tr>
            <tr>
                <td>
                    Dane kontaktowe
                </td>
                <td>
                        Telefon komórkowy
                    <br>Telefon domowy
                    <br>Adres e-mail
                    <br>Numer kontaktowy do bliskiej osoby - Telefon komórkowy
                    <br>Numer kontaktowy do bliskiej osoby - Telefon domowy
                </td>
                <td>
                        {{ $candidate->mobile_phone }}
                    <br>{{ $candidate->home_phone }}
                    <br>{{ $candidate->email }}
                    <br>{{ $candidate->family_mobile_phone }}
                    <br>{{ $candidate->family_home_phone }}
                </td>
            </tr>
            <tr>
                <td>
                        Adres korespondencyjny
                    <br>(wypełnić jeśli inny niź adres zameldowania)
                </td>
                <td>
                        Ulica
                    <br>nr domu
                    <br>mieszkanie
                    <br>Kod pocztowy
                    <br>Poczta
                    <br>Miejscowość
                </td>
                <td>
                        {{ $candidate->second_street }}
                    <br>{{ $candidate->second_house_number }}
                    <br>{{ $candidate->second_apartment_number }}
                    <br>{{ $candidate->second_post_code }}
                    <br>{{ $candidate->second_post_office }}
                    <br>{{ $candidate->second_city }}
                </td>
            </tr>
            <tr>
                <td>
                    Wykształcenie
                </td>
                <td>
                    {{ $candidate->educationName }}
                </td>
            </tr>
            @if($candidate->education === 10)
                <tr>
                    <td>
                    </td>
                    <td>
                        Tytuł naukowy
                    </td>
                    <td>
                        {{ $candidate->academic_title }}
                    </td>
                </tr>
            @endif
        </table>
    </body>
</html>
