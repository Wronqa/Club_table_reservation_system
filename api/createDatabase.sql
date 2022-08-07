INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 1 - VIP', '80, 90, 160, 130',8 ,150);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 2', '153, 50, 193, 90',6 ,50);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 3', '190, 50, 223, 90',6 ,50);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 4', '230, 50, 263, 90',6 ,50);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 5 - VIP', '275, 45, 320, 90',8 ,150);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 6 - VIP', '330, 45, 375, 90',8 ,150);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 7 - VIP', '380, 45, 425, 90',8 ,150);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 8 - VIP', '440, 40, 490, 90',12 ,200);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 9 - SUPER VIP', '515, 65, 575, 130',12 ,1000);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 10 - SUPER VIP', '465, 115, 515, 150',8 ,500);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 11', '308, 120, 345, 155',4 ,0);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 12', '318, 158, 355, 195',4 ,0);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 13', '375, 158, 415, 198',4 ,0);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 14', '420, 150, 460, 190',4 ,0);
INSERT INTO "Table" (name,coords,seats,price) VALUES('Table 15 - SUPER VIP', '265, 210, 370, 270',20 ,1500);


DBCC CHECKIDENT ('[TestTable]', RESEED, 0);
GO