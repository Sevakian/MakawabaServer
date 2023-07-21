const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true,}))

app.use('/timestats', require('./routes/timestats/tableRoutes'))
app.use('/timestats', require('./routes/timestats/dataRoutes'))

app.use('/calendar', require('./routes/calendar/tableRoutes'))
app.use('/calendar', require('./routes/calendar/dataRoutes'))

app.use('/gaming', require('./routes/gaming/gameRoutes'))
app.use('/gaming', require('./routes/gaming/consoleRoutes'))

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
})
