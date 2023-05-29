/**
 * A data table column that contains boolean values.
 */
declare type BooleanDataTableColumn = {
    /**
     * The type of data the data column can contain.
     */
    type: 'boolean';
    /**
     * The name of the column.
     */
    name: string;
    /**
     * The values to include in the column.
     *
     * @remarks
     * A value in a data table is comparable to an individual cell in a spreadsheet.
     */
    values: (boolean | void)[];
};

export declare type DataProvider = {
    /**
     * Registers a callback that runs when a data consumer requests data from an app.
     *
     * @param callback The callback to run when a data consumer requests data from an app.
     *
     * @remarks
     * When this callback runs, an app can either:
     *
     * * Call the `opts.selectDataTable` function to immediately send a data table to the consumer.
     * * Render a UI that lets users browse and select from one or more data tables. Then, once the
     * user selects a data table, the app calls the `opts.selectDataTable` function.
     */
    onSelectDataTable: (callback: OnSelectDataTableCallback) => void;
};

/**
 * The types of data that data table columns can contain.
 */
export declare type DataProviderColumnType = DataTableColumn['type'];

/**
 * The data structure that apps must use to expose data to data consumers.
 */
export declare type DataTable = {
    /**
     * The name of the data table.
     */
    name: string;
    /**
     * The columns of the data table.
     *
     * @remarks
     * A column in a data table is comparable to a column in a spreadsheet.
     */
    columns: DataTableColumn[];
};

/**
 * An individual column within a data table.
 */
export declare type DataTableColumn = (StringDataTableColumn | NumberDataTableColumn | DateDataTableColumn | BooleanDataTableColumn);

/**
 * A data table column that contains date values.
 */
declare type DateDataTableColumn = {
    /**
     * The type of data the data column can contain.
     */
    type: 'date';
    /**
     * The name of the column.
     */
    name: string;
    /**
     * The values to include in the column.
     *
     * @remarks
     * A value in a data table is comparable to an individual cell in a spreadsheet.
     */
    values: (Date | void)[];
};

export declare function getDataProvider(): DataProvider

/**
 * A data table column that contains numeric values.
 */
declare type NumberDataTableColumn = {
    /**
     * The type of data the data column can contain.
     */
    type: 'number';
    /**
     * The name of the column.
     */
    name: string;
    /**
     * The values to include in the column.
     *
     * @remarks
     * A value in a data table is comparable to an individual cell in a spreadsheet.
     */
    values: (number | void)[];
};

/**
 * The callback that runs when a data consumer requests data from an app.
 */
export declare type OnSelectDataTableCallback = (opts: SelectDataTableRequest) => void;

/**
 * The options passed to an app via the `onSelectDataTable` callback.
 */
export declare type SelectDataTableRequest = {
    /**
     * The callback that apps must use to send a data table to a data consumer.
     *
     * @param dataTable The data table to send to the data consumer.
     */
    selectDataTable: (dataTable: DataTable) => void;
};

/**
 * A data table column that contains string values.
 */
export declare type StringDataTableColumn = {
    /**
     * The type of data the data column can contain.
     */
    type: 'string';
    /**
     * The name of the column.
     */
    name: string;
    /**
     * The values to include in the column.
     *
     * @remarks
     * A value in a data table is comparable to an individual cell in a spreadsheet.
     */
    values: (string | void)[];
};

export { }
