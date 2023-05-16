# Pong
# Cíl projektu
Naprogramovat hru pong. Cílem hry bude odrážet míček obdélníkem zpátky ke svému protihráči. Chtěl bych udělat jednoduchou hru, ve které si budou moct zasoupeřit 2 hráči proti sobě.

# Zvolené technologie
Visual Studio, html, css, javascript, nenáročné

# dokumentace
Je cyklus, který neustále mění polohu míče. K souřadnicím x a y míče se v cyklusu přičítá nastavená hodnota. Když míč narazí na spodní nebo horní bariéru herního pole, hodnota, která se neustále přičítá k souřadnici y se vynásobí -1. Když míč narazí do Obdélníku jednoho z hráčů, hodnota, která se přičítá k souřadnici x se vynásobí -1. Když míč narazí levou nebo pravou bariéru, jednomu z hráčů(tomu kdo dal gól se přičte bod) a míč se vrátí na střed. Hra ještě chvílí počká a míč se opět začne pohybovat. Když zmáčkne hráč mezerník, hodnota pauza se vynásobí -1. Na začátku cyklusu je if, který kontroluje, zda je hodnota pauza 1(true). Když je hodnota pauza 1, cyklus se vrátí na začátek. Pohyb hráčů funguje tak, že když hráč zmáčkne klávesu(když zmáčkne šipku nahoru bude se pohybovat nahoru a opačně) hodnota, která se v cyklu přičítá/odečítá(podle směru do kterého se chce hráč pohybovat) k souřadnici y se začne zvětšovat o X, tím docílíme toho, že se hráčův obdélník zrychluje podle toho jak dlouho klávesu drží. Když hráč klávesu pustí, hodnota přičítaná/odečítaná v cyklu se vynuluje.
