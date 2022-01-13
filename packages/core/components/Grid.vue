<template>
	<div>
		<SlimGrid
			pk="id"
			:data="data"
			:editable="true"
			:height="400"
			:column-options="columnOptions"
			:autoEdit="true"
			@grid-click="gridClick"
			:asyncEditorLoading="false"
			:enableAddRow="false"
			:enableAsyncPostRender="true"
			:enableCellNavigation="true"
			:enableColumnReorder="false"
			:explicitInitialization="true"
			:forceSyncScrolling="true"
			@drag-start="dragStart"
		></SlimGrid>
	</div>
</template>

<script>
import { Editors } from 'slickgrid-es6';
import SlimGrid from 'vue-slimgrid';
import $ from 'jquery';
export default {
	components: { SlimGrid },
	data() {
		return {
			data: this.generateDummyData(),
			columnOptions: {
				// Options applied to all columns.
				'*': {
					sortable: false,
					resizable: true,
					focusable: true,
					headerInput: false,
					headerFilter: false,
					selectable: true,
					editor: Editors.Text,
				},

				// Options only applied to 'col1'.
				num: {
					id: 'num',
					field: 'num',
					name: '번호',
					maxWidth: 50,
					hidden: false,
					focusable: false,
					selectable: false,
					editor: false,
				},
				field1: {
					field: 'field1',
					name: '이름',
					autoEdit: true,
				},
				field2: {
					field: 'field2',
					name: '휴대폰',
				},
				field3: {
					field: 'field3',
					name: '팩스',
				},
				field4: {
					field: 'field4',
					name: '이메일',
				},
				field5: {
					field: 'field5',
					name: '[*1*]',
				},
				field6: {
					field: 'field6',
					name: '[*2*]',
				},
				field7: {
					field: 'field7',
					name: '메모',
				},
			},
		};
	},
	mounted() {
		console.log('grid mounted');
		console.log(Editors);
	},
	methods: {
		dragStart(e, args) {
			console.log('dragStart~~');
			console.log(e);
			console.log(args.grid);
			$('div.grid-canvas').find('input').blur();
			args.grid.getEditController().commitCurrentEdit();
		},
		gridClick(e, args) {
			setTimeout(() => {
				$(e.target).find('input').focus();
			}, 100);
		},
		generateDummyData() {
			let data = [];
			for (let i = 1; i <= 10; i++) {
				let row = { id: i };
				for (let j = 1; j <= 7; j++) {
					row['num'] = i;
					row['field1'] = '';
					row['field2'] = '';
					row['field3'] = '';
					row['field4'] = '';
					row['field5'] = '';
					row['field6'] = '';
					row['field7'] = '';
				}
				data.push(row);
			}
			return data;
		},
		getData() {
			return [{ id: '1', col1: 'value', col2: 'value', col3: 'value' }];
		},
	},
};
</script>
<style src="vue-slimgrid/dist/slimgrid.css"></style>
