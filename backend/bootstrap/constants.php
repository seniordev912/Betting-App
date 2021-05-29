<?php
define('SUCCESS_CODE',200);
define('BAD_REQUEST_CODE', 400);
define('UNAUTHENTICATED_CODE', 401);
define('SERVER_ERROR_CODE', 500);

define('REGISTER_SUCCEED_MESSAGE','Rejestracja przebiegła prawidłowo. Sprawdź swoją skrzynkę e-mail, aby aktywować konto.');
define('FORGOTPASSWORD_SUCCEED_MESSAGE','Sprawdź pocztę, aby ustawić nowe hasło.');
define('VERIFICATION_SUCCEED','Twoje konto jest zweryfikowane.');
define('RESETPASSWORD_SUCCEED','Hasło do konta zostało pomyślnie ustanowione jako nowe.');
define('LOGIN_SUCCEED_MESSAGE', 'Zostałeś zalogowany pomyślnie.');
define('ALREADY_EXIST_MESSAGE', 'Konto o podanym adresie e-mail już istnieje.');
define('NOT_CONFIRMED_MESSAGE', 'Konto nie zostało potwierdzone. Sprawdź pocztę e-mail, aby potwierdzić konto.');
define('NOT_EXIST_MESSAGE', 'E-mail lub Hasło jest niepoprawne.');
define('PASSWORD_INCORRECT_MESSAGE', 'Hasło jest nieprawidłowe.');
define('PASSWORD_SUCCESS_UPDATE_MESSAGE', 'Hasło zostało pomyślnie zaktualizowane.');
define('CREATE_SERIES_SUCCSES', 'Zmienna egzogeniczna została dodana.');
define('CREATE_SCENARIOS_SUCCSES', 'Symulacja została uruchomiona. Możesz wykonać jej analizę po jej przeliczeniu.');
define('CREATE_ANALYZE_SUCCESS', 'Twoja analiza została zapisana');
define('UPDATE_ANALYZE_SUCCSES', 'Twoja analiza została zaktualizowana');
define('DELETE_ANALYZE_SUCCESS', 'Analiza została usnięta');
define('UPDATE_BLOCK_SUCCSESFUL', 'Treść została zaktualizowana');
define('NOT_EXIST_ACCOUNT_MESSAGE', 'Konto o podanym adresie e-mail nie istnieje.');
define('FAILED_SEND_MESSAGE', 'Sorry, the confirmation email is not sent. Please try again to register.');
define('SERVER_ERROR_MESSAGE','An Error is occured on the server.');
define('EXIST_QUALIFICATION_POINT', 'Punkt kwalifikacyjny istnieje.');
define('CREATE_QUALIFICATION_POINT_SUCCESS', 'Twój punkt kwalifikacji został zapisany.');
define('UPDATE_QUALIFICATION_POINT_SUCCESS', 'Twój punkt kwalifikacji został zaktualizowany.');
define('DELETE_QUALIFICATION_POINT_SUCCESS', 'Twój punkt kwalifikacyjny został usunięty.');

define('CREATE_TRAINING_SUCCESS', 'Twój szkolenie został zapisany.');
define('UPDATE_TRAINING_SUCCESS', 'Twój szkolenie został zaktualizowany.');
define('DELETE_TRAINING_SUCCESS', 'Twój szkolenie został usunięty.');

define('CREATE_SPECIALIST_POINT_SUCCESS', 'Twój specjalista został zapisany.');
define('UPDATE_SPECIALIST_POINT_SUCCESS', 'Twój specjalista został zaktualizowany.');
define('DELETE_SPECIALIST_POINT_SUCCESS', 'Twój specjalista został usunięty.');

define('CREATE_USER_SUCCESS', 'Twój użytkownik został zapisany.');
define('UPDATE_USER_SUCCESS', 'Twój użytkownik został zaktualizowany.');
define('DELETE_USER_SUCCESS', 'Twój użytkownik został usunięty.');

define('CREATE_SERVICE_SUCCESS', 'Twój usługa został zapisany.');
define('UPDATE_SERVICE_SUCCESS', 'Twój usługa został zaktualizowany.');
define('DELETE_SERVICE_SUCCESS', 'Twój usługa został usunięty.');

define('UPDATE_REHABITATION_CENTER_SUCCESS', 'Twoje centrum kwalifikacji zostało zaktualizowane.');

define('CREATE_ORK_TEAM_SUCCESS', 'Twój zespół ORK został zapisany.');
define('UPDATE_ORK_TEAM_SUCCESS', 'Twój zespół ORK został zaktualizowany.');
define('DELETE_ORK_TEAM_SUCCESS', 'Twój zespół ORK został usunięty.');

define('CREATE_IPR_SUCCESS', 'Twój IPR został zapisany.');
define('DUPLICATE_IPR_SUCCSESS', 'Twój IPR został zapisany.');
define('UPDATE_IPR_SUCCESS', 'Twój IPR został zaktualizowany.');
define('DELETE_IPR_SUCCESS', 'Twój IPR został usunięty.');
define('EXIST_IPR', 'PWI istnieje.');

define('CREATE_PAYMENT_SUCCESS', 'Twój koszt został zapisany.');
define('UPDATE_PAYMENT_SUCCESS', 'Twój koszt został zaktualizowany.');
define('DELETE_PAYMENT_SUCCESS', 'Twój koszt został usunięty.');

define('CREATE_CANDIDATE_SUCCESS', 'Twój kandydata został zapisany.');
define('UPDATE_CANDIDATE_SUCCESS', 'Twój kandydata został zaktualizowany.');
define('DELETE_CANDIDATE_SUCCESS', 'Twój kandydata został usunięty.');

define('UPDATE_CANDIDATE_FAILED', 'Nie masz uprawnień do aktualizowania tego kandydata.');

define('JWT_TOKEN_INVALID', 'Token is Invalid');
define('JWT_TOKEN_EXPIRED', 'Token is Expired');
define('JWT_TOKEN_NOTFOUND', 'Authorization Token not found');

define('SUCCESS_MESSAGE', 'The success response has been received');

define('CANDIDATE_CREATE', 'Dodanie kandydata');
define('CANDIDATE_UPDATE_1', 'Ustanowienie karty informacyjnej krok 1');
define('CANDIDATE_UPDATE_2', 'Ustanowienie karty informacyjnej krok 2');
define('CANDIDATE_UPDATE_3', 'Ustanowienie karty informacyjnej krok 3');
define('CANDIDATE_UPDATE_4', 'Ustanowienie karty informacyjnej krok 4');

define('UPDATE_NOTIFICATION_STATUS_SUCCESS', 'Powiadomienie zostaje przyjęte.');
define('DELETE_NOTIFICATION_SUCCESS', 'Powiadomienie zostało pomyślnie usunięte.');
define('UPDATE_NOTIFICATION_SETTING_SUCCESS', 'Ustawienie powiadomień zostało pomyślnie zaktualizowane.');
