module.exports = {
	// 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
	// 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
	moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
	// `@`나 `~` 같은 경로 별칭을 매핑합니다.
	// E.g. `import HelloWorld from '~/components/HelloWorld.vue';`
	// `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
	// TODO: 프로젝트에 맞는 경로로 수정하세요!
	moduleNameMapper: {
		'^~/(.*)$': '<rootDir>/src/$1',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testMatch: [
		// __tests__ 경로 하위에 있는 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
		'**/__tests__/**/*.[jt]s?(x)',
		// 파일 이름에 'xxx.spec' 또는 'xxx.test'라는 이름이 붙여인 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
		'**/?(*.)+(spec|test).[jt]s?(x)',
	],
	// 일치하는 경로에서는 모듈을 가져오지 않습니다.
	// `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
	// TODO: 프로젝트에 맞는 경로로 수정하세요!
	modulePathIgnorePatterns: [
		'<rootDir>/node_modules',
		'<rootDir>/build',
		'<rootDir>/dist',
	],
	// 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.js?$': 'babel-jest',
	},
	// Jest Snapshot 테스트에 필요한 모듈을 지정합니다.
	snapshotSerializers: ['jest-serializer-vue'],
};
