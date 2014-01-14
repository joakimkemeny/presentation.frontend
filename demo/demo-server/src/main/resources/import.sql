-- Insert some test patients.
insert into patients(civic_reg_nr, first_name, last_name, street_address, zip_code, city, phone, mobile) values ('121212-1212', 'Kalle', 'Kula', 'Storgatan 1', '12345', 'Göteborg', '031-123456', '0708-123456');

-- Insert some notes.
insert into notes(created_time, fk_patient, type, text, doctor) values ('2014-01-14 10:00:00', 1, 'Note', 'Ont i höger tå', 'Anna Dahl');

-- Insert some appointments.
insert into appointments(start_time, end_time, fk_patient, notes) value ('2014-01-15 10:00:00', '2014-01-15 12:00:00', 1, 'Var i tid');
